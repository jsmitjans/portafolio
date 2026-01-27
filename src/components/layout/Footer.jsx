function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © {currentYear} <strong className="px-1 sitename">Jesús Soto Mitjans</strong>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
