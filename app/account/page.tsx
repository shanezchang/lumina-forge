'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth';
import { 
  getOrCreateProfile, 
  updateProfile, 
  uploadAvatar, 
  deleteAvatar,
  validateUsername,
  validateAvatarFile,
  type Profile 
} from '@/lib/profile';
import { useToast } from '@/app/components/Toast';
import Navbar from '@/app/components/Navbar';

export default function AccountPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const [usernameError, setUsernameError] = useState<string | null>(null);

  useEffect(() => {
    loadUserProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUserProfile = async () => {
    setLoading(true);
    try {
      const currentUser = await getCurrentUser();
      if (!currentUser) {
        router.push('/auth/login');
        return;
      }
      
      setUser(currentUser);
      
      const { data, error } = await getOrCreateProfile(currentUser.id, currentUser.email || '');
      if (error) {
        console.error('Error loading profile:', error);
        showToast('加载用户信息失败：' + error.message, 'error');
      } else if (data) {
        setProfile(data);
        setUsername(data.username || '');
        setBio(data.bio || '');
        setAvatarPreview(data.avatar_url);
      }
    } catch (err) {
      console.error('Error:', err);
      showToast('加载用户信息失败', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleUsernameChange = (value: string) => {
    setUsername(value);
    const error = validateUsername(value);
    setUsernameError(error);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validationError = validateAvatarFile(file);
    if (validationError) {
      showToast(validationError, 'error');
      return;
    }

    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAvatarUpload = async () => {
    if (!selectedFile || !user) return;

    setUploading(true);
    
    try {
      if (profile?.avatar_url) {
        const oldPath = profile.avatar_url.split('/').slice(-2).join('/');
        await deleteAvatar(oldPath);
      }

      const { data, error: uploadError } = await uploadAvatar(user.id, selectedFile);
      if (uploadError) {
        showToast('头像上传失败：' + uploadError.message, 'error');
        return;
      }

      const { data: updatedProfile, error: updateError } = await updateProfile(user.id, {
        avatar_url: data?.url,
      });

      if (updateError) {
        showToast('更新头像失败：' + updateError.message, 'error');
        return;
      }

      showToast('头像上传成功！', 'success');
      setSelectedFile(null);
      
      if (updatedProfile) {
        setProfile(updatedProfile);
        setAvatarPreview(updatedProfile.avatar_url);
      }
    } catch (err) {
      console.error('Error uploading avatar:', err);
      showToast('头像上传失败', 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleSaveProfile = async () => {
    if (!user) return;
    if (usernameError) return;

    setSaving(true);

    try {
      const { data: updatedProfile, error: updateError } = await updateProfile(user.id, {
        username,
        bio,
      });

      if (updateError) {
        showToast('保存失败：' + updateError.message, 'error');
        return;
      }

      showToast('保存成功！', 'success');
      
      if (updatedProfile) {
        setProfile(updatedProfile);
      }
    } catch (err) {
      console.error('Error saving profile:', err);
      showToast('保存失败', 'error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-600">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">账号设置</h1>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  头像
                </label>
                <div className="flex items-center space-x-6">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                      {avatarPreview ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img 
                          src={avatarPreview} 
                          alt="Avatar" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-3xl text-gray-400">
                          {username?.[0]?.toUpperCase() || '?'}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 w-24 h-24 rounded-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span className="text-white text-sm">更换</span>
                    </button>
                  </div>
                  <div className="flex-1">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      选择图片
                    </button>
                    {selectedFile && (
                      <button
                        type="button"
                        onClick={handleAvatarUpload}
                        disabled={uploading}
                        className="ml-3 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {uploading ? '上传中...' : '上传头像'}
                      </button>
                    )}
                    <p className="mt-2 text-xs text-gray-500">
                      支持 JPG、PNG、WebP、GIF 格式，最大 5MB
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  邮箱
                </label>
                <input
                  id="email"
                  type="email"
                  value={user?.email || ''}
                  disabled
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500 cursor-not-allowed"
                />
                <p className="mt-1 text-xs text-gray-500">邮箱不可修改</p>
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  昵称
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => handleUsernameChange(e.target.value)}
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    usernameError ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="请输入昵称"
                />
                {usernameError && (
                  <p className="mt-1 text-sm text-red-600">{usernameError}</p>
                )}
              </div>

              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                  个人简介
                </label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="介绍一下自己..."
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => router.push('/')}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                返回首页
              </button>
              <button
                type="button"
                onClick={handleSaveProfile}
                disabled={saving || !!usernameError}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? '保存中...' : '保存'}
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
