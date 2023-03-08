// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  Block,
  Navigation
} from '@/pages/api/types';
import type { NextApiRequest, NextApiResponse } from 'next'

type Index = {
  navigation: Navigation,
  blocks: Block[],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Index>
) {
  res.status(200).json({
    navigation: [{
      title: 'Store',
      link: 'store',
      items: [{
        title: 'Watch',
        link: 'store/watch',
        items: [{
          title: 'Smart Watch',
          link: 'store/smart'
        }, {
          title: 'Laptop',
          link: 'store/laptop'
        }],
      }],
    }, {
      title: 'Watch',
      link: 'watch',
      items: [{
        title: 'Smart',
        link: 'watch/smart',
      }],
    }, {
      title: 'Laptop',
      link: 'laptop',
      items: [{
        title: '16',
        link: '16',
      }],
    }, {
      title: 'Project',
      url: 'https://google.com',
    }],
    blocks: [{
      type: 'columns',
      columns: [{
        heading: 'Lorem ipsum',
        image: `${process.env.VERCEL_URL}/wide.jpg`,
        text: 'Nunc efficitur, lorem non egestas tincidunt',
      }],
    }, {
      type: 'columns',
      columns: [{
        heading: 'Lorem ipsum',
        image: `${process.env.VERCEL_URL}/image1.jpg`,
        text: 'Nunc efficitur, lorem non egestas tincidunt',
        link: 'https://google.com',
      }, {
        heading: 'Ut erat augue',
        image: `${process.env.VERCEL_URL}/image2.jpg`,
        text: 'Sed hendrerit sapien at tellus tristique',
        link: 'https://google.com',
      }, {
        heading: 'Nullam luctus convallis',
        image: `${process.env.VERCEL_URL}/image3.jpg`,
        text: 'Integer consectetur eros sed',
        link: 'https://google.com',
      }, {
        image: `${process.env.VERCEL_URL}/image4.jpg`,
        text: 'Maecenas varius, ligula quis ullamcorper',
        link: 'https://google.com',
      }],
    }, {
      type: 'carousel',
      items: [{
        heading: 'Lorem ipsum',
        image: `${process.env.VERCEL_URL}/image1.jpg`,
        text: 'Nunc efficitur, lorem non egestas tincidunt',
        link: 'https://google.com',
      }, {
        heading: 'Ut erat augue',
        image: `${process.env.VERCEL_URL}/image2.jpg`,
        text: 'Sed hendrerit sapien at tellus tristique',
        link: 'https://google.com',
      }, {
        heading: 'Nullam luctus convallis',
        image: `${process.env.VERCEL_URL}/image3.jpg`,
        text: 'Integer consectetur eros sed',
        link: 'https://google.com',
      }, {
        image: `${process.env.VERCEL_URL}/image4.jpg`,
        text: 'Maecenas varius, ligula quis ullamcorper',
      }, {
        image: `${process.env.VERCEL_URL}/image5.jpg`,
        text: 'Maecenas varius, ligula quis ullamcorper',
      }],
    }],
  })
}
