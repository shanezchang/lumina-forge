import { supabase } from './supabase';

export interface Profile {
  id: string;
  username: string | null;
  avatar_url: string | null;
  bio: string | null;
  created_at: string;
  updated_at: string;
}

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle();

  return { data, error };
}

export async function createProfile(userId: string, email: string) {
  const { data, error } = await supabase
    .from('profiles')
    .insert({
      id: userId,
      username: email.split('@')[0],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select()
    .single();

  return { data, error };
}

export async function getOrCreateProfile(userId: string, email: string) {
  const { data, error } = await getProfile(userId);
  
  if (error) {
    return { data: null, error };
  }
  
  if (!data) {
    const result = await createProfile(userId, email);
    return result;
  }
  
  return { data, error: null };
}

export async function updateProfile(userId: string, updates: Partial<Profile>) {
  const { data, error } = await supabase
    .from('profiles')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', userId)
    .select()
    .single();

  return { data, error };
}

export async function uploadAvatar(userId: string, file: File) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}/${Date.now()}.${fileExt}`;

  const { error } = await supabase.storage
    .from('avatars')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    return { data: null, error };
  }

  const { data: { publicUrl } } = supabase.storage
    .from('avatars')
    .getPublicUrl(fileName);

  return { data: { path: fileName, url: publicUrl }, error: null };
}

export async function deleteAvatar(path: string) {
  const { error } = await supabase.storage
    .from('avatars')
    .remove([path]);

  return { error };
}

export function validateUsername(username: string): string | null {
  if (!username || username.trim().length === 0) {
    return '昵称不能为空';
  }
  if (username.length < 2) {
    return '昵称至少需要2个字符';
  }
  if (username.length > 30) {
    return '昵称不能超过30个字符';
  }
  if (!/^[\u4e00-\u9fa5a-zA-Z0-9_-]+$/.test(username)) {
    return '昵称只能包含中文、英文、数字、下划线和连字符';
  }
  return null;
}

export function validateAvatarFile(file: File): string | null {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  if (!allowedTypes.includes(file.type)) {
    return '只支持 JPG、PNG、WebP 和 GIF 格式的图片';
  }
  
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    return '图片大小不能超过 5MB';
  }
  
  return null;
}
