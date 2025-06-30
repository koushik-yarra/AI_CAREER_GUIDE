type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight font-headline">{title}</h1>
      {description && <p className="text-muted-foreground mt-1 max-w-2xl">{description}</p>}
    </div>
  );
}
