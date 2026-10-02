export type TagProps = {
  /** label is the text that is displayed in the tag */
  label: string;
  /** variant is the color of the tag. it can be primary, secondary, danger, warning, or success */
  variant: "primary" | "secondary" | "danger" | "warning" | "success";
};

const colorClasses = {
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
  danger: "bg-red-500",
  warning: "bg-yellow-500",
  success: "bg-green-500",
};

//very basic tag component V1
const Tag = ({ label, variant }: TagProps) => {
  return (
    <div className={`${colorClasses[variant]} text-white px-2 py-1 rounded-md`}>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default Tag;
