export function PageHeader({ title, description, actions, children }) {
  return (
    <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-am-cafe tracking-tight">{title}</h1>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
      
      {actions && (
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          {actions}
        </div>
      )}
    </div>
  );
}
