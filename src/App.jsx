import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Cpu,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import {
  contactChannels,
  interests,
  navLinks,
  profile,
  stats,
  strengths,
  toolkit,
} from "./data.js";

const iconMap = {
  Users,
  BookOpen,
  MessageCircle,
  Cpu,
};

function Reveal({ children, className = "", as: Tag = "div", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark">Carry</span>
          <span className="brand-name">杨铠瑞</span>
        </a>

        <nav className="desktop-nav" aria-label="主导航">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          联系我
          <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>

      <main>
        <section className="hero" id="top">
          <div className="hero-media" aria-hidden="true">
            <img
              src="./hero-user.jpg"
              alt=""
              loading="eager"
              fetchpriority="high"
            />
            <div className="hero-media-shade" />
          </div>

          <div className="hero-content container">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              深圳大学 · 高等研究院 · 2026级
            </p>

            <h1 className="hero-title">
              <span>{profile.name}</span>
              <span className="hero-title-en">{profile.englishName}</span>
            </h1>

            <p className="hero-copy">
              从潮阳到深圳，正在把好奇心变成看得见的作品。
              关注 AI Agent，也认真生活、打球和听歌。
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#hometown">
                认识我
                <ArrowDown size={17} />
              </a>
              <a className="button button-ghost" href="#contact">
                联系我
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="hero-side-note" aria-hidden="true">
            <span>PORTFOLIO</span>
            <span>2026 / 2027</span>
          </div>

          <a className="scroll-cue" href="#hometown" aria-label="向下浏览">
            <ArrowDown size={18} />
          </a>
        </section>

        <section className="hometown" id="hometown">
          <div className="hometown-media" aria-hidden="true">
            <img src="./hometown.jpg" alt="" loading="eager" />
            <div className="hometown-shade" />
          </div>
          <div className="container hometown-content">
            <Reveal>
              <p className="hometown-kicker">我的来处 · CHAOYANG</p>
              <h2>
                来自广东汕头，
                <br />
                是今年一部热门电影
                <br />
                <span className="hometown-film">《给阿嬷的情书》的取景地</span>，
                <br />
                也是潮汕美食之都，英歌舞之乡，滨海网红城市，
                <br />
                欢迎大家来汕头玩。
              </h2>
            </Reveal>
          </div>
          <a className="scroll-cue" href="#highschool" aria-label="向下浏览">
            <ArrowDown size={18} />
          </a>
        </section>

        <section className="highschool" id="highschool">
          <div className="highschool-media" aria-hidden="true">
            <img src="./highschool.jpg" alt="" loading="eager" />
            <div className="highschool-shade" />
          </div>
          <div className="container highschool-content">
            <Reveal>
              <p className="highschool-kicker">高中一个侧面 · CHAOSHI</p>
              <h2>
                高中就读于潮阳实验学校（潮实），省内的同学可能略有耳闻（doge），
                它以可观的状元培养率和一道名菜青椒炒油条而闻名（bushi）。
              </h2>
            </Reveal>
          </div>
          <a className="scroll-cue" href="#about" aria-label="向下浏览">
            <ArrowDown size={18} />
          </a>
        </section>

        <section className="section about" id="about">
          <div className="about-media" aria-hidden="true">
            <img src="./about.jpg" alt="" loading="eager" />
            <div className="about-shade" />
          </div>
          <div className="container about-grid">
            <div className="about-copy">
              <Reveal>
                <p className="section-kicker">个人经历</p>
                <h2>
                  从潮阳到深圳，
                  <br />
                  做一个持续构建的人。
                </h2>
              </Reveal>

              <Reveal delay={80}>
                <p className="lede">{profile.intro}</p>
              </Reveal>

              <Reveal delay={140} className="contact-lines">
                {contactChannels.map((channel) => (
                  <div className="contact-line" key={channel.label}>
                    <span className="contact-label">{channel.label}</span>
                    {channel.href ? (
                      <a href={channel.href}>{channel.value}</a>
                    ) : (
                      <span>{channel.value}</span>
                    )}
                  </div>
                ))}
              </Reveal>

              <Reveal delay={200} className="stats-grid">
                {stats.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        <section className="interests" id="interests">
          <div className="interests-media" aria-hidden="true">
            <img src="./interests.jpg" alt="" loading="eager" />
            <div className="interests-shade" />
          </div>
          <div className="container interests-inner">
            <Reveal className="interests-head">
              <p className="section-kicker">关于我 · INTERESTS</p>
              <h2>一点喜欢的东西。</h2>
            </Reveal>

            <div className="interests-grid">
              {interests.map((group, index) => (
                <Reveal
                  key={group.title}
                  className="interest-box"
                  delay={index * 80}
                >
                  <p className="interest-title">{group.title}</p>
                  <div className="interest-items">
                    {group.items.map((item) =>
                      typeof item === "string" ? (
                        <span key={item}>{item}</span>
                      ) : (
                        <div
                          className="interest-media-item"
                          key={item.text}
                        >
                          <span>{item.text}</span>
                          {item.image ? (
                            <img src={item.image} alt="" loading="eager" />
                          ) : null}
                        </div>
                      ),
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <a className="scroll-cue" href="#strengths" aria-label="向下浏览">
            <ArrowDown size={18} />
          </a>
        </section>

        <section className="section strengths" id="strengths">
          <div className="container">
            <Reveal className="section-head compact">
              <div>
                <p className="section-kicker">个人优势</p>
                <h2>我能带来的东西。</h2>
              </div>
              <p className="section-note">
                不追求一次性证明所有事，而是让每个合作都留下更清楚的结果。
              </p>
            </Reveal>

            <div className="strength-grid">
              {strengths.map((strength, index) => {
                const Icon = iconMap[strength.icon];
                return (
                  <Reveal
                    key={strength.title}
                    className="strength-card"
                    delay={index * 70}
                  >
                    <div className="strength-icon">
                      <Icon size={22} />
                    </div>
                    <h3>{strength.title}</h3>
                    <p>{strength.description}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="toolkit" id="toolkit">
          <div className="container toolkit-inner">
            <Reveal className="toolkit-head">
              <p className="toolkit-kicker">TOOLKIT · 工具领域</p>
              <h2>{toolkit.title}</h2>
            </Reveal>

            <div className="toolkit-grid">
              {toolkit.groups.map((group, index) => (
                <Reveal
                  key={group.title}
                  className="toolkit-box"
                  delay={index * 80}
                >
                  <h3>{group.title}</h3>
                  <div className="toolkit-items">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <a className="scroll-cue" href="#contact" aria-label="向下浏览">
            <ArrowDown size={18} />
          </a>
        </section>
      </main>

      <footer className="contact" id="contact">
        <div className="contact-grid" aria-hidden="true" />
        <div className="container contact-inner">
          <Reveal>
            <p className="section-kicker">联系我</p>
            <h2>
              一起做点
              <br />
              有意思的事。
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="contact-intro">
              如果你也在关注 AI Agent、校园产品，或者只是想聊聊潮阳、篮球和音乐，欢迎写信给我。
            </p>
          </Reveal>

          <Reveal delay={140}>
            <a className="button button-primary button-large" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              写邮件给我
              <ArrowUpRight size={18} />
            </a>
          </Reveal>

          <Reveal delay={200} className="contact-bottom">
            <div className="contact-details">
              {contactChannels.map((channel) => (
                <div className="contact-detail" key={channel.label}>
                  <span>{channel.label}</span>
                  {channel.href ? (
                    <a href={channel.href}>{channel.value}</a>
                  ) : (
                    <strong>{channel.value}</strong>
                  )}
                </div>
              ))}
            </div>
            <div className="contact-signature">
              <Sparkles size={16} />
              <span>保持好奇，持续构建</span>
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  );
}

export default App;
