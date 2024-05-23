import React from 'react'

interface TitleProps {
          title: string;
}

const Title = ({ title }: TitleProps) => {
          return (
                    <h4 className="text-mdl ">
                              {title}
                    </h4>
          )
}

export default Title