import { ReactNode } from 'react';

export const Section = ({ children }: { children: ReactNode }) => {
          return (
                    <section className="max-w-3xl mx-auto px-4">
                              {children}
                    </section>
          );
};
