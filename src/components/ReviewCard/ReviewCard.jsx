import { Marquee } from "../../components/ui/marquee";
import styles from "../ReviewCard/ReviewCard.module.css";
import starImg from "../../../public/star.png";
import { useSelector } from "react-redux";

const reviews = [
  {
    name: "Usman Abbas",
    username: "@usmanabbas",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://images.unsplash.com/photo-1644383431542-19f678c3e207?q=80&w=971&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bilal Khawaja",
    username: "@nothing.",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://images.unsplash.com/photo-1722354980566-ec247cb4f1a8?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ali Akbar",
    username: "@aliM",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://images.unsplash.com/photo-1711045290148-9dc18f7776fb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fatima",
    username: "@fatima",
    body: "Fast and responsive UI.Love your work.Thanks.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmPPoHhb5Hl45zqf2PhZ-GCHRU-fllf-2gkPeLoAan4x85YbsrmXaztU&s",
  },
  {
    name: "Saira",
    username: "@sarii",
    body: "I am happy to work with you Faraz. This is amazing. I love it.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGJtvcEk4Lm5Y52Jk2LG2nRnFQoQjfTDcuL5OeBSsYFXCtoTymuWYc3E&s",
  },
  {
    name: "Jammy",
    username: "@james",
    body: "Very fast and beautiful UI design.Amazing work!",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <div className={styles.reviewCardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.cardImage}>
          <img src={img} alt="" />
        </div>
        <div className={styles.cardHeaderText}>
          <p className={styles.cardName}>{name}</p>
          <p className={styles.cardUserName}>{username}</p>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.rating}>
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
        </div>
        <div className={styles.cardDetail}>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export function MarqueeDemo() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r z-10 ${
          theme === "light"
            ? "from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0.8)] to-transparent"
            : "from-[rgba(30,34,50,1)] via-[rgba(30,34,50,0.8)] to-transparent"
        }`}
      />

      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l z-10 ${
          theme === "light"
            ? "from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0.8)] to-transparent"
            : "from-[rgba(30,34,50,1)] via-[rgba(30,34,50,0.8)] to-transparent"
        }`}
      />
    </div>
  );
}
