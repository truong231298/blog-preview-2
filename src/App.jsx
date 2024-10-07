import avatar from './assets/images/image-avatar.webp';
import blogImage from './assets/images/illustration-article.svg';

function BlogPost({ title, date, description, authorName, authorImage }) {
  return (
    <article className="sm:w-1/3 w-full mx-4 mt-10 rounded-lg flex flex-col gap-4 p-4 bg-white">
      <figure>
        <img src={blogImage} alt="Article illustration" className="rounded-lg w-full" />
      </figure>
      <header className="w-20 p-2 bg-yellow-400 font-semibold">Learning</header>
      <time className="text-gray-500">{date}</time>
      <h2 className="text-xl font-semibold hover:text-yellow-400 cursor-pointer">{title}</h2>
      <p>{description}</p>
      <AuthorInfo name={authorName} avatar={authorImage} />
    </article>
  );
}

function AuthorInfo({ name, avatar }) {
  return (
    <div className="flex flex-row gap-4 items-center mt-2">
      <img src={avatar} alt={`Author ${name}`} className="w-12 h-12 rounded-full" />
      <h3 className="font-semibold">{name}</h3>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-YellowSet">
      <section className="flex justify-center items-center">
        <BlogPost
          title="HTML & CSS Foundations"
          date="Published 21 Dec 2023"
          description="These languages are the backbone of every website, defining structure, content, and presentation."
          authorName="Greg Hooper"
          authorImage={avatar}
        />
      </section>
    </main>
  );
}
