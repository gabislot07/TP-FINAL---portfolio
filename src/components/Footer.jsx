const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} Gabriel Slotnisky
        </p>
      </div>
    </footer>
  );
};

export default Footer;
