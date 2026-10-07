export default function Container({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag
      {...props}
      className={`mx-auto w-full max-w-[var(--container-max)] px-[var(--page-gutter)] ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}
