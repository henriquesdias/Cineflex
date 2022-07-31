export default function Footer({img,title,weekday,date}){
  return (
    <footer>
      <div className="img">
        <img src={img} alt={title} />
      </div>
      <div>
        {title}
        <div>
          {weekday} {date}
        </div>
      </div>
    </footer>
  );
}