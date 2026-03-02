export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="Square Builders Group"
                className="w-8 h-8 object-contain"
              />
              <span className="text-cream font-serif font-semibold">
                Square Builders
              </span>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed">
              Premium general contracting in the Bay Area. Design-build, new
              construction, and remodeling.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {['Design Build', 'New Construction', 'Overall Improvement'].map(
                (item) => (
                  <li key={item}>
                    <a href="#services" className="text-cream/40 text-sm hover:text-cream transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {['Palo Alto', 'Saratoga', 'Sunnyvale', 'Mountain View', 'San Jose', 'Atherton', 'Los Altos', 'Cupertino'].map(
                (item) => (
                  <li key={item} className="text-cream/40 text-sm">
                    {item}
                  </li>
                )
              )}
              <li className="text-cream/40 text-sm">
                + 5 more cities
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-cream/40 text-sm">
              <li>
                <a href="tel:+16692229990" className="hover:text-cream transition-colors duration-200">
                  (669) 222-9990
                </a>
              </li>
              <li>
                <a href="mailto:info@squarebuildersgroup.com" className="hover:text-cream transition-colors duration-200">
                  info@squarebuildersgroup.com
                </a>
              </li>
              <li>920 Saratoga Ave, Ste 107</li>
              <li>San Jose, CA 95129</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-sm">
            &copy; {year} Square Builders Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'License'].map((item) => (
              <a key={item} href="#" className="text-cream/30 text-xs hover:text-cream/60 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
