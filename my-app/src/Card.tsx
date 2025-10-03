type CardProps = {
  color: "red" | "blue" | "purple";
  size: "sm" | "md" | "lg";
};

const colorMap = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
};

const sizeMap = {
  sm: "w-12 h-12",
  md: "w-36 h-36",
  lg: "w-72 h-72",
};

export function Card({ color, size }: CardProps) {
  return (
    <div className={colorMap[color] + " " + sizeMap[size]}>
      Hello
    </div>
  );
}