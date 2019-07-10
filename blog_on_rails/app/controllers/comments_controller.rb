class CommentsController < ApplicationController



    def create
        @post = Post.find params[:post_id]
        comment_params = params.require(:comment).permit(:body)
        @comment   = Comment.new comment_params
        @comment.post = @post
       
        if @comment.save
        redirect_to post_path(@post), notice: 'Comment created!'
       else
        render '/posts/show'
       end
    end


    def destroy
        @post = Post.find params[:post_id]
        @comment = Comment.find params[:id]
        @comment.destroy
        redirect_to post_path(@post), notice: 'Question Deleted'
      end



end
