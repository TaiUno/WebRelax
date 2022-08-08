const ListItem = () => {
  const listItem = ["bg-uyen-em1", "bg-uyen-em2"].map((item, index) => {
    return (
      <li
        key={index}
        className={
          (item === "bg-uyen-em1" ? item + " bg-center" : item) +
          " flex items-center justify-center w-72 h-72 bg-cover rounded-full shadow-3xl"
        }
      ></li>
    );
  });

  return <ul className="flex items-center justify-center mt-6">{listItem}</ul>;
};

export default ListItem;
