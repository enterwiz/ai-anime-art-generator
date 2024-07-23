import { FooterProps } from "@/types/footer";
import { Link } from "@nextui-org/react";
import React from "react";

const LinkGroup: React.FC<FooterProps> = ({
  productTitle,
  productDescription,
  columns,
}) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Introduction */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-xl text-gray-400 font-bold mb-4">
              {productTitle}
            </h2>
            <p className="text-gray-400">{productDescription}</p>
          </div>

          {/* Link Columns */}
          {columns.map((column, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-lg font-semibold text-gray-400 mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      title={link.title}
                      color="foreground"
                      underline="hover"
                      className="text-gray-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkGroup;

