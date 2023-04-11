// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  Api,
} from '@/pages/api/types';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Api>
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
          link: 'store/watch/smart'
        }, {
          title: 'Pocket watch',
          link: 'store/watch/pocket'
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
        title: 'Gaming',
        link: 'laptop/gaming',
      }, {
        title: 'Office',
        link: 'laptop/office'
      }],
    }, {
      title: 'External Project',
      items: [{
        title: 'Project 1',
        url: 'https://google.com',
      }]
    }],
    blocks: [{
      type: 'columns',
      columns: [{
        heading: 'Lorem ipsum',
        image: `https://${process.env.VERCEL_URL}/wide.png`,
        text: 'Nunc efficitur, lorem non egestas tincidunt',
      }],
    }, {
      type: 'columns',
      columns: [{
        heading: 'Lorem ipsum',
        image: `https://${process.env.VERCEL_URL}/image1.jpg`,
        text: 'Nunc efficitur, lorem non egestas tincidunt',
        link: 'https://google.com',
      }, {
        heading: 'Ut erat augue',
        image: `https://${process.env.VERCEL_URL}/image2.jpg`,
        text: 'Sed hendrerit sapien at tellus tristique',
        link: 'https://google.com',
      }, {
        image: `https://${process.env.VERCEL_URL}/image3.jpg`,
        text: 'Integer consectetur eros sed',
        link: 'laptop/gaming',
      }, {
        heading: 'Nullam luctus convallis',
        text: 'Maecenas varius, ligula quis ullamcorper',
        link: 'https://google.com',
      }],
    }, {
      type: 'carousel',
      items: [{
        heading: 'Lorem ipsum',
        image: `https://${process.env.VERCEL_URL}/image1.jpg`,
        text: 'Nunc efficitur, lorem non egestas tincidunt',
        link: 'https://google.com',
      }, {
        heading: 'Ut erat augue',
        image: `https://${process.env.VERCEL_URL}/image2.jpg`,
        text: 'Sed hendrerit sapien at tellus tristique',
        link: 'https://google.com',
      }, {
        heading: 'Nullam luctus convallis',
        image: `https://${process.env.VERCEL_URL}/image3.jpg`,
        text: 'Integer consectetur eros sed',
        link: 'https://google.com',
      }, {
        image: `https://${process.env.VERCEL_URL}/image4.jpg`,
        text: 'Maecenas varius, ligula quis ullamcorper',
      }, {
        image: `https://${process.env.VERCEL_URL}/image5.png`,
        text: 'Maecenas varius, ligula quis ullamcorper',
      }],
    }],
  })
}
