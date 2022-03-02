interface Items {
  items: {
    name: string
    href: string
  }[]
}

export const SideBar = ({ items }: Items) => {
  return (
    <div role='navigation'>
      {items.map((item) => (
        <div key={item.href}>
          <a href={item.href}>{item.name}</a>
        </div>
      ))}
    </div>
  )
}
