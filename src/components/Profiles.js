export default function Profiles({ title, description, imageUrl }) {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <img src={imageUrl} alt="pictures" />
      <p className="description">{description}</p>
    </div>
  );
}
