import { useMutation } from '@tanstack/react-query';
import { TAG } from '../api/types.ts';
import { updatePostById } from '../api';

const useUpdatePost = () => {
  const mutation = async ({ postId, title, contents, tag }: { postId: string; title: string; contents: string; tag: TAG }) => {
    await updatePostById(postId, title, contents, tag);
  };

  return useMutation({
    mutationKey: ['createPost'],
    mutationFn: mutation,
  });
};

export default useUpdatePost;
