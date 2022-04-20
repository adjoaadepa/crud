const Post = require("../models/post.model");

const getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
};

const getSinglePost = async (req, res) => {
  const postId = req.params.postId;
  const post = await Post.findById(postId);
  post;
};

const createPost = async (req, res) => {
  const post = await Post.find({});
  res.status(201).json(post);
};

const updatePost = async (req, res) => {
  const postId = req.params.postId;
  let post = await Post.findById(postId);

  //logic
  if (!post) {
    return res.status(400).json({ msg: "Post not found" });
  }
  post = await Post.findByIdAndUpdate(postId, req.body, { new: true });
  res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const postId = req.params.postId;
  let post = await Post.findById(postId);

  //logic
  if (!post) {
    return res.status(404).json({ msg: "Post deleted" });
  }
  await Post.findByIdAndDelete(postId);
  res.status(200).json(post);
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
