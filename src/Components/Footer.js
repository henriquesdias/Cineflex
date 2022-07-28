export default function Footer({img,title}){
  return (
    <footer>
      <div>
        <img src={img} alt={title} />
      </div>
      <span>
        {title}
      </span>
    </footer>
  );
}