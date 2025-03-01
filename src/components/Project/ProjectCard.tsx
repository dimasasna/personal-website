
import { Eye, Github } from 'lucide-react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { Link } from 'react-router'

type Props = {
    title: string;
    img: string;
    alt: string;
    desc: string;
    url: string;
}

const ProjectCard = (props: Props) => {
  return (
    
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={props.img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
            <div className='flex flex-row gap-2'>
            <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="py-2 rounded-xl text-xs font-normal text-white cursor-pointer"
          >
            <Github />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="py-2 rounded-xl text-xs font-normal text-white cursor-pointer"
          >
            <Eye />
          </CardItem>
            </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;