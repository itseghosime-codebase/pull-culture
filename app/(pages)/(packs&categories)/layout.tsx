
export default function CategoriesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex-1">
            {children}
        </div>
    );
}
