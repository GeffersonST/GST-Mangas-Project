export const Manga = ({ manga }) => {
  const { attributes } = manga;
  console.log(attributes);
  const title = attributes.titles["en"] || attributes.titles["ja_jp"];
  const img = attributes.posterImage?.tiny;
  return (
    <div className="p-2 shadow-xl rounded bg-gray-200">
      <div className="flex flex-row space-x-4 justify-start items-start">
        <img src={img} alt={title} className="object-scale-down" />
        <h3 className="text-xl font-bold">{title}</h3>
        <div>{attributes.description}</div>
      </div>
    </div>
  );
};
