type TagProps = {
  label: string;
};

//very basic tag component V1
const Tag = ({ label }: TagProps) => {
  return (
    <div>
      <span>{label}</span>
    </div>
  );
};

export default Tag;
