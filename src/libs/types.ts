// You can define interfaces for all React components here.
// Do not forget to export properly.
interface postOwnerProps {
    username: string;
    userImagePath: string;
    postText: string;
    likeNum: number;
}
export type { postOwnerProps };

interface commentProps {
    username: string;
    userImagePath: string;
    commentText: string;
    likeNum: number;
    replies: ReplyProps;
}
export type { commentProps };

interface ReplyProps {
    username: string;
    userImagePath: string;
    replyText: string;
    likeNum: number;
}
export type { ReplyProps };
