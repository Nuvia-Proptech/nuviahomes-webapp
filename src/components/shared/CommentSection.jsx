"use client"

import React, { useState } from 'react';

export const CommentSection = () => {
  const [comments] = useState([
   {
    id: 1,
    author: "Samuel Okoh",
    date: "17th May 2025",
    text: "This article provides valuable insights into the home-buying process. I found the tips on budgeting and choosing the right neighborhood particularly helpful. It's a must-read for first-time buyers!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
    {
    id: 6,
    author: "Maria Rodriguez",
    date: "5th May 2025",
    text: "The comparison between renting and buying was very balanced and data-driven. It helped me make an informed decision based on my current financial situation.",
    avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    author: "Kofi Mensah",
    date: "12th May 2025",
    text: "I wish I had read this before purchasing my first home! The checklist for home inspections saved me from potential costly mistakes during my recent property search.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    author: "Amina Jalloh",
    date: "10th May 2025",
    text: "The advice about considering future development plans in the area is crucial. Many buyers overlook this aspect and regret it later. Great practical tips throughout!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="  py-12 px-4 featured-gradient border border-gray-700 rounded-2xl">
      <div className="max-w-5xl mx-auto ">
        {/* Comments Header */}
        <h2 className="text-white text-2xl font-semibold mb-8">comments</h2>

        {/* Comments List */}
        <div className="space-y-6 mb-12">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-4">
            
              <div className="flex-shrink-0">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>

              {/* Comment Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{comment.author}</h3>
                    <p className=" text-sm text-gray-400">{comment.date}</p>
                  </div>
                  <button className="text-purple-200 hover:text-white transition-colors text-sm">
                    Reply
                  </button>
                </div>
                <p className="text-sm leading-relaxed">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Form Header */}
        <h2 className="text-white text-2xl font-semibold mb-6">comments</h2>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className=" border border-purple-900/50 rounded-lg px-4 py-3 text-white  focus:outline-none 0 transition-colors forms-gradient"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className=" border border-purple-900/50 rounded-lg px-4 py-3 text-white  focus:outline-none  transition-colors forms-gradient "
            />
          </div>
          
          <textarea
            placeholder="Type your comment here"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            rows="6"
            className="w-full border border-purple-900/50 rounded-lg px-4 py-3 text-white  focus:outline-none  transition-colors resize-none forms-gradient"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="text-purple-900 font-semibold px-8 py-3   transition-all duration-300 shadow-lg hover:shadow-xl btn-gradient skewed hover:translate-y-0.5"
            >
              Submit message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}