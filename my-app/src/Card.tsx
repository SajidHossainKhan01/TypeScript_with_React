type CardProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function Card({ setCount }: CardProps) {
  return (
    <div>
      <button onClick={() => setCount((count: number) => count + 1)}>
        Click Me!
      </button>
    </div>
  );
}
