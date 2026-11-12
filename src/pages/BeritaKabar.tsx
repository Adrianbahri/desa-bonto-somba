import React, { useState } from 'react';
import { Plus, ArrowLeft, Calendar, User } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import type { PostItem, PortalSettings } from '../types/index.ts';

interface BeritaKabarProps {
  posts: PostItem[];
  settings: PortalSettings;
  isFromWordPress: boolean;
}

export const BeritaKabar: React.FC<BeritaKabarProps> = ({
  posts,
  settings,
  isFromWordPress,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedPost, setSelectedPost] = useState<PostItem | null>(null);

  const categories = ['Semua', ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts =
    selectedCategory === 'Semua'
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-white text-navy overflow-x-hidden">
      <PageBanner
        title={settings.beritaBannerTitle}
        subtitle={settings.beritaBannerSubtitle}
        image={settings.beritaBannerImage}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14">
        {selectedPost ? (
          /* Detail Artikel Penuh (dari Classic Editor WordPress) */
          <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-[0_12px_36px_rgba(3,43,17,0.08)] border border-stone-100 overflow-hidden">
            <div className="h-64 sm:h-96 w-full overflow-hidden bg-stone-100 relative">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="cursor-pointer absolute top-4 left-4 inline-flex items-center gap-2 bg-terracotta text-white text-xs font-bold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali ke Daftar Berita</span>
              </button>
            </div>

            <div className="p-6 sm:p-10 space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs text-navy/70">
                <span className="bg-terracotta text-white text-[10px] font-semibold px-3 py-1 rounded-full">
                  {selectedPost.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-terracotta" />
                  {selectedPost.date}
                </span>
                {selectedPost.author && (
                  <span className="inline-flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-terracotta" />
                    {selectedPost.author}
                  </span>
                )}
              </div>

              <h2 className="font-serif italic font-bold text-2xl sm:text-4xl text-navy leading-snug">
                {selectedPost.title}
              </h2>

              {selectedPost.content ? (
                <div
                  className="prose prose-sm sm:prose-base max-w-none text-navy/85 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              ) : (
                <p className="text-sm sm:text-base text-navy/85 leading-relaxed">
                  {selectedPost.excerpt}
                </p>
              )}
            </div>
          </article>
        ) : (
          <>
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
              <div className="flex items-center gap-3">
                <h2 className="font-serif italic font-bold text-3xl sm:text-4xl text-navy">
                  Warta Terkini
                </h2>
                {isFromWordPress && (
                  <span className="bg-ochre text-navy text-[10px] font-bold px-3 py-1 rounded-full">
                    Terhubung WordPress API
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`cursor-pointer px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                      selectedCategory === cat
                        ? 'bg-navy text-white shadow-xs'
                        : 'bg-ochre-cream text-navy hover:bg-ochre/40'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid in Leychert Overlapping Card Style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="cursor-pointer group flex flex-col"
                >
                  <div className="h-56 w-full rounded-lg overflow-hidden bg-stone-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 bg-white rounded-xl shadow-[0_10px_28px_rgba(26,46,68,0.07)] p-6 -mt-12 mx-2 border border-stone-100 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-terracotta text-white text-[10px] font-semibold px-3 py-1 rounded-full -mt-9 mb-3 shadow-xs">
                        {post.date}
                      </span>
                      <p className="text-[10px] uppercase tracking-wider font-bold text-terracotta mb-1">
                        {post.category} {post.author ? `• ${post.author}` : ''}
                      </p>
                      <h3 className="font-bold text-base text-navy group-hover:text-terracotta transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-navy/70 mt-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 inline-flex items-center gap-2 text-xs font-bold text-navy group-hover:text-terracotta transition-colors">
                      <span className="w-4 h-4 rounded-full bg-terracotta text-white flex items-center justify-center">
                        <Plus className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      <span>Baca selengkapnya</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
