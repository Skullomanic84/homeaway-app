type NavLink = {
    href: string;
    label: string;
}

export const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/favorites", label: "Favourite" },
    { href: "/bookings", label: "Bookings" },
    { href: "/reviews", label: "Reviews" },
    { href: "/rentals/create", label: "Create Rental" },
    { href: "/rentals", label: "Rentals" },
    { href: "/profile", label: "Profile" },
]