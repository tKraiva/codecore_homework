class PostsController < ApplicationController

    

    def new 
        @post = Post.new
    end

    def create

        @post = Post.new post_params

        if @post.save
            flash[:notice] = "Question created successfully"
            # if question is saved successfully redirect to question show page
            redirect_to post_path(@post)
          else
            # render views/questions/new.html.erb
            render :new
          end

    end

    def show

        @post = Post.find params[:id]
        @comment= Comment.new

    end

    
    def index

        @post = Post.all

    end


    def edit

        @post = Post.find params[:id]

    end


    def update 

        @post = Post.find params[:id]

        if @post.update post_params
            redirect_to post_path(@post)
          else
            render :edit
          end
    end


    def destroy


        @post = Post.find params[:id]

        @post.destroy
        redirect_to posts_path
    end


    private


    def post_params

        params.require(:post).permit(:title, :body)


    end
end
