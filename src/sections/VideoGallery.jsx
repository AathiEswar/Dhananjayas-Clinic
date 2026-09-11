import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { YOUTUBE_VIDEOS } from '../data';
import { CLINIC } from '../config';
import Icon from '../lib/Icons';

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(YOUTUBE_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSelectVideo = (video) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  return (
    <section className="video-gallery section" data-scroll-section id="videos">
      <div className="container">
        <SectionHeader
          eyebrow="Patient Recovery Stories · YouTube @MOUNAA369"
          segments={[
            { t: 'Real patient recoveries, ' },
            { t: 'documented on video.', em: true },
          ]}
          side={
            <div className="video-gallery__header-side">
              <p>
                Watch real patients share their healing journey from chronic L4-L5 disc pain, 3-year leg pain,
                frozen shoulder, and migraine through Classical Acupuncture and Hijama cupping.
              </p>
              <a
                className="btn btn--yt-channel"
                href={CLINIC.youtube}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                title="Visit our YouTube Channel"
              >
                <span className="yt-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </span>
                <span>Visit Channel {CLINIC.youtubeHandle}</span>
                <Icon name="arrowR" size={14} strokeWidth={2.2} />
              </a>
            </div>
          }
        />

        {/* Featured Video Player Viewport */}
        <div className="video-featured" data-reveal>
          <div className="video-featured__player-wrap">
            {isPlaying ? (
              <iframe
                className="video-featured__iframe"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div
                className="video-featured__poster"
                onClick={() => setIsPlaying(true)}
                data-cursor="hover"
                role="button"
                tabIndex={0}
                aria-label={`Play ${activeVideo.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsPlaying(true);
                  }
                }}
              >
                <img
                  src={`https://i.ytimg.com/vi/${activeVideo.id}/maxresdefault.jpg`}
                  onError={(e) => {
                    e.target.src = `https://i.ytimg.com/vi/${activeVideo.id}/hqdefault.jpg`;
                  }}
                  alt={activeVideo.title}
                  className="video-featured__poster-img"
                  loading="lazy"
                />
                <div className="video-featured__poster-overlay">
                  <div className="video-featured__play-badge">
                    <span className="video-featured__play-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </span>
                    <span className="video-featured__play-text">Click to Play Recovery Video</span>
                  </div>
                  {activeVideo.badge && (
                    <span className="video-featured__tag">{activeVideo.badge}</span>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="video-featured__details">
            <div className="video-featured__meta">
              <span className="chip chip--tint">{activeVideo.category}</span>
              <span className="video-featured__duration"><Icon name="clock" size={13} /> {activeVideo.duration}</span>
              <span className="video-featured__badge-verified"><Icon name="star" size={13} /> Verified Patient Testimony</span>
            </div>
            <h3 className="video-featured__title">{activeVideo.title}</h3>
            <p className="video-featured__desc">{activeVideo.desc}</p>
            <div className="video-featured__actions">
              <a
                className="btn btn--secondary btn--sm"
                href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
              >
                <span className="yt-icon-sm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </span>
                Watch on YouTube
              </a>
              <a
                className="btn btn--ghost btn--sm"
                href={CLINIC.youtube}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
              >
                Browse all video testimonials
              </a>
            </div>
          </div>
        </div>

        {/* Video Playlist Grid */}
        <div className="video-playlist-header">
          <h4 className="video-playlist-header__title">
            <span>More Recovery Stories</span>
            <em>Click any video to watch above</em>
          </h4>
        </div>

        <div className="video-grid">
          {YOUTUBE_VIDEOS.map((v) => {
            const isSelected = activeVideo.id === v.id;
            return (
              <div
                key={v.id}
                className={`video-card ${isSelected ? 'is-selected' : ''}`}
                onClick={() => handleSelectVideo(v)}
                data-cursor="hover"
                data-reveal
                tabIndex={0}
                role="button"
                aria-label={`Select video: ${v.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelectVideo(v);
                  }
                }}
              >
                <div className="video-card__thumb-wrap">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="video-card__thumb"
                    loading="lazy"
                  />
                  <div className="video-card__overlay">
                    <span className="video-card__play-btn" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </span>
                  </div>
                  <span className="video-card__duration">{v.duration}</span>
                  {isSelected && (
                    <span className="video-card__active-pill">Now Playing</span>
                  )}
                </div>
                <div className="video-card__info">
                  <span className="video-card__category">{v.category}</span>
                  <h4 className="video-card__title">{v.title}</h4>
                  <p className="video-card__desc">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* YouTube Channel Callout Banner */}
        <div className="yt-channel-banner" data-reveal>
          <div className="yt-channel-banner__content">
            <span className="yt-channel-banner__badge">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </span>
            <div className="yt-channel-banner__txt">
              <h3>Subscribe to {CLINIC.youtubeHandle} on YouTube</h3>
              <p>Explore all video recovery documentaries, patient interviews, and natural wellness guides by Healer Vinithraj &amp; team.</p>
            </div>
          </div>
          <a
            className="btn btn--primary"
            href={CLINIC.youtube}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
          >
            Visit YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
}
