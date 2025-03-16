export default function SiteFooter() {
  return (
    <footer className="border-t p-4">
      <p className="text-center text-sm font-light tracking-wide">
        &copy; {new Date().getFullYear()} | Made by Lucan Grobler
      </p>
    </footer>
  );
}
