
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const PROPERTY_SALES_TYPE = [
    {
        id: 1,
        label: 'All',
        value: 'All',
    },
    {
        id: 2,
        label: 'House',
        value: 'House',
    },
    {
        id: 3,
        label: 'Unit & Apartment',
        value: 'Unit & Apartment',
    },
    {
        id: 4,
        label: 'Land',
        value: 'Land',
    },
    {
        id: 5,
        label: 'Townhouse',
        value: 'Townhouse',
    },
    {
        id: 6,
        label: 'Rural',
        value: 'Rural',
    },
    {
        id: 7,
        label: 'Villa',
        value: 'Villa',
    },
    {
        id: 8,
        label: 'Acreage',
        value: 'Acreage',
    },
    {
        id: 9,
        label: 'Block of Units',
        value: 'Block of Units',
    },
]
const DATA_AGENTS = [
    {
        id: 2,
        name: 'Estes',
        video: 'https://www.youtube.com/embed/sSthIYOJlKQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        star: 5,
        reviews: [
            {
                id: 1,
                rating: 4,
                description: 'In incididunt eiusmod duis laboris occaecat culpa nulla mollit. Ex nostrud et sunt irure aliquip ullamco incididunt mollit consequat in sunt amet officia culpa. Est pariatur velit non eu qui sit in velit magna exercitation. Aliquip adipisicing excepteur aute ullamco sint ipsum cillum aliquip. Magna adipisicing culpa incididunt deserunt in eiusmod dolore sint reprehenderit ut cupidatat irure.'
            },
            {
                id: 2,
                rating: 5,
                description: 'Adipisicing velit ad reprehenderit quis labore voluptate exercitation velit adipisicing deserunt proident veniam aliquip.'
            },
            {
                id: 3,
                rating: 4,
                description: 'Pariatur minim aliqua Lorem eu sint ea proident fugiat aliquip ea est incididunt. Laborum cillum aliquip cupidatat elit cupidatat minim laborum ullamco. Adipisicing et ipsum non proident aliqua cupidatat ea irure est. Et tempor est laborum qui non minim proident eiusmod est Lorem. Aliqua fugiat esse nostrud ipsum occaecat. Non quis non duis eu nisi ad dolore ea incididunt fugiat qui proident mollit magna. Irure aliqua ea proident qui ad aute cupidatat pariatur pariatur. Nostrud laboris eu consectetur duis adipisicing in. Magna sit eiusmod excepteur excepteur voluptate sint laborum anim ea laborum do. Eu deserunt et fugiat eu adipisicing nostrud nostrud nulla. Deserunt anim ex velit incididunt magna excepteur commodo cillum nisi sit culpa. Magna cillum consectetur Lorem pariatur amet. Minim aliquip ad ullamco dolor ad sint commodo adipisicing reprehenderit nulla tempor officia. Reprehenderit duis consequat id nulla do aute aute nulla aute culpa irure. Do quis reprehenderit consequat sit exercitation aliqua amet ut. Officia ut eu ea eiusmod cupidatat exercitation deserunt occaecat ea adipisicing adipisicing ullamco. Voluptate tempor aute cupidatat nisi voluptate tempor aute aliquip non non nisi ea. Voluptate qui dolor nostrud cillum veniam cillum dolore proident reprehenderit tempor qui eiusmod. Magna et tempor ipsum ex ullamco consectetur fugiat ipsum qui consectetur tempor cupidatat ex sint.'
            },
            {
                id: 4,
                rating: 4.8,
                description: 'Esse culpa sit ad exercitation sint deserunt minim eiusmod qui minim.'
            }
        ],
        position: 'Cillum minim anim nostrud cupidatat Lorem nulla pariatur elit dolor est.',
        code: 'Excepteur quis amet sit ut consequat irure ipsum aute non consequat.',
        titleData: 'Labore est sunt excepteur mollit.',
        propertiesSold: 277,
        medianSoldPrice: 440,
        medianDaysAdvertised: 11,
        allSuburbs: 288,
        properties: [
            {
                id: 1,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 3,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 4,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 5,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 6,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 7,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
        ]
    },
    {
        id: 3,
        name: 'Argus',
        video: 'https://www.youtube.com/embed/sSthIYOJlKQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        star: 5,
        reviews: [
            {
                id: 1,
                rating: 4,
                description: 'In incididunt eiusmod duis laboris occaecat culpa nulla mollit. Ex nostrud et sunt irure aliquip ullamco incididunt mollit consequat in sunt amet officia culpa. Est pariatur velit non eu qui sit in velit magna exercitation. Aliquip adipisicing excepteur aute ullamco sint ipsum cillum aliquip. Magna adipisicing culpa incididunt deserunt in eiusmod dolore sint reprehenderit ut cupidatat irure.'
            },
            {
                id: 2,
                rating: 5,
                description: 'Adipisicing velit ad reprehenderit quis labore voluptate exercitation velit adipisicing deserunt proident veniam aliquip.'
            },
            {
                id: 3,
                rating: 4,
                description: 'Pariatur minim aliqua Lorem eu sint ea proident fugiat aliquip ea est incididunt. Laborum cillum aliquip cupidatat elit cupidatat minim laborum ullamco. Adipisicing et ipsum non proident aliqua cupidatat ea irure est. Et tempor est laborum qui non minim proident eiusmod est Lorem. Aliqua fugiat esse nostrud ipsum occaecat. Non quis non duis eu nisi ad dolore ea incididunt fugiat qui proident mollit magna. Irure aliqua ea proident qui ad aute cupidatat pariatur pariatur. Nostrud laboris eu consectetur duis adipisicing in. Magna sit eiusmod excepteur excepteur voluptate sint laborum anim ea laborum do. Eu deserunt et fugiat eu adipisicing nostrud nostrud nulla. Deserunt anim ex velit incididunt magna excepteur commodo cillum nisi sit culpa. Magna cillum consectetur Lorem pariatur amet. Minim aliquip ad ullamco dolor ad sint commodo adipisicing reprehenderit nulla tempor officia. Reprehenderit duis consequat id nulla do aute aute nulla aute culpa irure. Do quis reprehenderit consequat sit exercitation aliqua amet ut. Officia ut eu ea eiusmod cupidatat exercitation deserunt occaecat ea adipisicing adipisicing ullamco. Voluptate tempor aute cupidatat nisi voluptate tempor aute aliquip non non nisi ea. Voluptate qui dolor nostrud cillum veniam cillum dolore proident reprehenderit tempor qui eiusmod. Magna et tempor ipsum ex ullamco consectetur fugiat ipsum qui consectetur tempor cupidatat ex sint.'
            },
            {
                id: 4,
                rating: 4.8,
                description: 'Esse culpa sit ad exercitation sint deserunt minim eiusmod qui minim.'
            }
        ],
        position: 'Cillum minim anim nostrud cupidatat Lorem nulla pariatur elit dolor est.',
        code: 'Excepteur quis amet sit ut consequat irure ipsum aute non consequat.',
        titleData: 'Labore est sunt excepteur mollit.',
        propertiesSold: 277,
        medianSoldPrice: 440,
        medianDaysAdvertised: 11,
        allSuburbs: 288,
        properties: [
            {
                id: 1,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 3,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 4,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 5,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 6,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 7,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
        ]
    },
    {
        id: 4,
        name: 'Albert',
        video: 'https://www.youtube.com/embed/sSthIYOJlKQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        star: 5,
        reviews: [
            {
                id: 1,
                rating: 4,
                description: 'In incididunt eiusmod duis laboris occaecat culpa nulla mollit. Ex nostrud et sunt irure aliquip ullamco incididunt mollit consequat in sunt amet officia culpa. Est pariatur velit non eu qui sit in velit magna exercitation. Aliquip adipisicing excepteur aute ullamco sint ipsum cillum aliquip. Magna adipisicing culpa incididunt deserunt in eiusmod dolore sint reprehenderit ut cupidatat irure.'
            },
            {
                id: 2,
                rating: 5,
                description: 'Adipisicing velit ad reprehenderit quis labore voluptate exercitation velit adipisicing deserunt proident veniam aliquip.'
            },
            {
                id: 3,
                rating: 4,
                description: 'Pariatur minim aliqua Lorem eu sint ea proident fugiat aliquip ea est incididunt. Laborum cillum aliquip cupidatat elit cupidatat minim laborum ullamco. Adipisicing et ipsum non proident aliqua cupidatat ea irure est. Et tempor est laborum qui non minim proident eiusmod est Lorem. Aliqua fugiat esse nostrud ipsum occaecat. Non quis non duis eu nisi ad dolore ea incididunt fugiat qui proident mollit magna. Irure aliqua ea proident qui ad aute cupidatat pariatur pariatur. Nostrud laboris eu consectetur duis adipisicing in. Magna sit eiusmod excepteur excepteur voluptate sint laborum anim ea laborum do. Eu deserunt et fugiat eu adipisicing nostrud nostrud nulla. Deserunt anim ex velit incididunt magna excepteur commodo cillum nisi sit culpa. Magna cillum consectetur Lorem pariatur amet. Minim aliquip ad ullamco dolor ad sint commodo adipisicing reprehenderit nulla tempor officia. Reprehenderit duis consequat id nulla do aute aute nulla aute culpa irure. Do quis reprehenderit consequat sit exercitation aliqua amet ut. Officia ut eu ea eiusmod cupidatat exercitation deserunt occaecat ea adipisicing adipisicing ullamco. Voluptate tempor aute cupidatat nisi voluptate tempor aute aliquip non non nisi ea. Voluptate qui dolor nostrud cillum veniam cillum dolore proident reprehenderit tempor qui eiusmod. Magna et tempor ipsum ex ullamco consectetur fugiat ipsum qui consectetur tempor cupidatat ex sint.'
            },
            {
                id: 4,
                rating: 4.8,
                description: 'Esse culpa sit ad exercitation sint deserunt minim eiusmod qui minim.'
            }
        ],
        position: 'Cillum minim anim nostrud cupidatat Lorem nulla pariatur elit dolor est.',
        code: 'Excepteur quis amet sit ut consequat irure ipsum aute non consequat.',
        titleData: 'Labore est sunt excepteur mollit.',
        propertiesSold: 277,
        medianSoldPrice: 440,
        medianDaysAdvertised: 11,
        allSuburbs: 288,
        properties: [
            {
                id: 1,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 3,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 4,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 5,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 6,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 7,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
        ]
    },
    {
        id: 5,
        name: 'Taxi',
        video: 'https://www.youtube.com/embed/sSthIYOJlKQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        star: 5,
        reviews: [
            {
                id: 1,
                rating: 4,
                description: 'In incididunt eiusmod duis laboris occaecat culpa nulla mollit. Ex nostrud et sunt irure aliquip ullamco incididunt mollit consequat in sunt amet officia culpa. Est pariatur velit non eu qui sit in velit magna exercitation. Aliquip adipisicing excepteur aute ullamco sint ipsum cillum aliquip. Magna adipisicing culpa incididunt deserunt in eiusmod dolore sint reprehenderit ut cupidatat irure.'
            },
            {
                id: 2,
                rating: 5,
                description: 'Adipisicing velit ad reprehenderit quis labore voluptate exercitation velit adipisicing deserunt proident veniam aliquip.'
            },
            {
                id: 3,
                rating: 4,
                description: 'Pariatur minim aliqua Lorem eu sint ea proident fugiat aliquip ea est incididunt. Laborum cillum aliquip cupidatat elit cupidatat minim laborum ullamco. Adipisicing et ipsum non proident aliqua cupidatat ea irure est. Et tempor est laborum qui non minim proident eiusmod est Lorem. Aliqua fugiat esse nostrud ipsum occaecat. Non quis non duis eu nisi ad dolore ea incididunt fugiat qui proident mollit magna. Irure aliqua ea proident qui ad aute cupidatat pariatur pariatur. Nostrud laboris eu consectetur duis adipisicing in. Magna sit eiusmod excepteur excepteur voluptate sint laborum anim ea laborum do. Eu deserunt et fugiat eu adipisicing nostrud nostrud nulla. Deserunt anim ex velit incididunt magna excepteur commodo cillum nisi sit culpa. Magna cillum consectetur Lorem pariatur amet. Minim aliquip ad ullamco dolor ad sint commodo adipisicing reprehenderit nulla tempor officia. Reprehenderit duis consequat id nulla do aute aute nulla aute culpa irure. Do quis reprehenderit consequat sit exercitation aliqua amet ut. Officia ut eu ea eiusmod cupidatat exercitation deserunt occaecat ea adipisicing adipisicing ullamco. Voluptate tempor aute cupidatat nisi voluptate tempor aute aliquip non non nisi ea. Voluptate qui dolor nostrud cillum veniam cillum dolore proident reprehenderit tempor qui eiusmod. Magna et tempor ipsum ex ullamco consectetur fugiat ipsum qui consectetur tempor cupidatat ex sint.'
            },
            {
                id: 4,
                rating: 4.8,
                description: 'Esse culpa sit ad exercitation sint deserunt minim eiusmod qui minim.'
            }
        ],
        position: 'Cillum minim anim nostrud cupidatat Lorem nulla pariatur elit dolor est.',
        code: 'Excepteur quis amet sit ut consequat irure ipsum aute non consequat.',
        titleData: 'Labore est sunt excepteur mollit.',
        propertiesSold: 277,
        medianSoldPrice: 440,
        medianDaysAdvertised: 11,
        allSuburbs: 288,
        properties: [
            {
                id: 1,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 3,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 4,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 5,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 6,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 7,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
        ]
    },
    {
        id: 6,
        name: 'Hanzo',
        video: 'https://www.youtube.com/embed/sSthIYOJlKQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        star: 5,
        reviews: [
            {
                id: 1,
                rating: 4,
                description: 'In incididunt eiusmod duis laboris occaecat culpa nulla mollit. Ex nostrud et sunt irure aliquip ullamco incididunt mollit consequat in sunt amet officia culpa. Est pariatur velit non eu qui sit in velit magna exercitation. Aliquip adipisicing excepteur aute ullamco sint ipsum cillum aliquip. Magna adipisicing culpa incididunt deserunt in eiusmod dolore sint reprehenderit ut cupidatat irure.'
            },
            {
                id: 2,
                rating: 5,
                description: 'Adipisicing velit ad reprehenderit quis labore voluptate exercitation velit adipisicing deserunt proident veniam aliquip.'
            },
            {
                id: 3,
                rating: 4,
                description: 'Pariatur minim aliqua Lorem eu sint ea proident fugiat aliquip ea est incididunt. Laborum cillum aliquip cupidatat elit cupidatat minim laborum ullamco. Adipisicing et ipsum non proident aliqua cupidatat ea irure est. Et tempor est laborum qui non minim proident eiusmod est Lorem. Aliqua fugiat esse nostrud ipsum occaecat. Non quis non duis eu nisi ad dolore ea incididunt fugiat qui proident mollit magna. Irure aliqua ea proident qui ad aute cupidatat pariatur pariatur. Nostrud laboris eu consectetur duis adipisicing in. Magna sit eiusmod excepteur excepteur voluptate sint laborum anim ea laborum do. Eu deserunt et fugiat eu adipisicing nostrud nostrud nulla. Deserunt anim ex velit incididunt magna excepteur commodo cillum nisi sit culpa. Magna cillum consectetur Lorem pariatur amet. Minim aliquip ad ullamco dolor ad sint commodo adipisicing reprehenderit nulla tempor officia. Reprehenderit duis consequat id nulla do aute aute nulla aute culpa irure. Do quis reprehenderit consequat sit exercitation aliqua amet ut. Officia ut eu ea eiusmod cupidatat exercitation deserunt occaecat ea adipisicing adipisicing ullamco. Voluptate tempor aute cupidatat nisi voluptate tempor aute aliquip non non nisi ea. Voluptate qui dolor nostrud cillum veniam cillum dolore proident reprehenderit tempor qui eiusmod. Magna et tempor ipsum ex ullamco consectetur fugiat ipsum qui consectetur tempor cupidatat ex sint.'
            },
            {
                id: 4,
                rating: 4.8,
                description: 'Esse culpa sit ad exercitation sint deserunt minim eiusmod qui minim.'
            }
        ],
        position: 'Cillum minim anim nostrud cupidatat Lorem nulla pariatur elit dolor est.',
        code: 'Excepteur quis amet sit ut consequat irure ipsum aute non consequat.',
        titleData: 'Labore est sunt excepteur mollit.',
        propertiesSold: 277,
        medianSoldPrice: 440,
        medianDaysAdvertised: 11,
        allSuburbs: 288,
        properties: [
            {
                id: 1,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 3,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 4,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 5,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 6,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 7,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
        ]
    },
    {
        id: 7,
        name: 'Johnson',
        video: 'https://www.youtube.com/embed/sSthIYOJlKQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        star: 5,
        reviews: [
            {
                id: 1,
                rating: 4,
                description: 'In incididunt eiusmod duis laboris occaecat culpa nulla mollit. Ex nostrud et sunt irure aliquip ullamco incididunt mollit consequat in sunt amet officia culpa. Est pariatur velit non eu qui sit in velit magna exercitation. Aliquip adipisicing excepteur aute ullamco sint ipsum cillum aliquip. Magna adipisicing culpa incididunt deserunt in eiusmod dolore sint reprehenderit ut cupidatat irure.'
            },
            {
                id: 2,
                rating: 5,
                description: 'Adipisicing velit ad reprehenderit quis labore voluptate exercitation velit adipisicing deserunt proident veniam aliquip.'
            },
            {
                id: 3,
                rating: 4,
                description: 'Pariatur minim aliqua Lorem eu sint ea proident fugiat aliquip ea est incididunt. Laborum cillum aliquip cupidatat elit cupidatat minim laborum ullamco. Adipisicing et ipsum non proident aliqua cupidatat ea irure est. Et tempor est laborum qui non minim proident eiusmod est Lorem. Aliqua fugiat esse nostrud ipsum occaecat. Non quis non duis eu nisi ad dolore ea incididunt fugiat qui proident mollit magna. Irure aliqua ea proident qui ad aute cupidatat pariatur pariatur. Nostrud laboris eu consectetur duis adipisicing in. Magna sit eiusmod excepteur excepteur voluptate sint laborum anim ea laborum do. Eu deserunt et fugiat eu adipisicing nostrud nostrud nulla. Deserunt anim ex velit incididunt magna excepteur commodo cillum nisi sit culpa. Magna cillum consectetur Lorem pariatur amet. Minim aliquip ad ullamco dolor ad sint commodo adipisicing reprehenderit nulla tempor officia. Reprehenderit duis consequat id nulla do aute aute nulla aute culpa irure. Do quis reprehenderit consequat sit exercitation aliqua amet ut. Officia ut eu ea eiusmod cupidatat exercitation deserunt occaecat ea adipisicing adipisicing ullamco. Voluptate tempor aute cupidatat nisi voluptate tempor aute aliquip non non nisi ea. Voluptate qui dolor nostrud cillum veniam cillum dolore proident reprehenderit tempor qui eiusmod. Magna et tempor ipsum ex ullamco consectetur fugiat ipsum qui consectetur tempor cupidatat ex sint.'
            },
            {
                id: 4,
                rating: 4.8,
                description: 'Esse culpa sit ad exercitation sint deserunt minim eiusmod qui minim.'
            }
        ],
        position: 'Cillum minim anim nostrud cupidatat Lorem nulla pariatur elit dolor est.',
        code: 'Excepteur quis amet sit ut consequat irure ipsum aute non consequat.',
        titleData: 'Labore est sunt excepteur mollit.',
        propertiesSold: 277,
        medianSoldPrice: 440,
        medianDaysAdvertised: 11,
        allSuburbs: 288,
        properties: [
            {
                id: 1,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 3,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 4,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 5,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 6,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 7,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
        ]
    },
    {
        id: 8,
        name: 'John',
        video: 'https://www.youtube.com/embed/sSthIYOJlKQ',
        videoThumbnail: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        star: 5,
        reviews: [
            {
                id: 1,
                rating: 4,
                description: 'In incididunt eiusmod duis laboris occaecat culpa nulla mollit. Ex nostrud et sunt irure aliquip ullamco incididunt mollit consequat in sunt amet officia culpa. Est pariatur velit non eu qui sit in velit magna exercitation. Aliquip adipisicing excepteur aute ullamco sint ipsum cillum aliquip. Magna adipisicing culpa incididunt deserunt in eiusmod dolore sint reprehenderit ut cupidatat irure.'
            },
            {
                id: 2,
                rating: 5,
                description: 'Adipisicing velit ad reprehenderit quis labore voluptate exercitation velit adipisicing deserunt proident veniam aliquip.'
            },
            {
                id: 3,
                rating: 4,
                description: 'Pariatur minim aliqua Lorem eu sint ea proident fugiat aliquip ea est incididunt. Laborum cillum aliquip cupidatat elit cupidatat minim laborum ullamco. Adipisicing et ipsum non proident aliqua cupidatat ea irure est. Et tempor est laborum qui non minim proident eiusmod est Lorem. Aliqua fugiat esse nostrud ipsum occaecat. Non quis non duis eu nisi ad dolore ea incididunt fugiat qui proident mollit magna. Irure aliqua ea proident qui ad aute cupidatat pariatur pariatur. Nostrud laboris eu consectetur duis adipisicing in. Magna sit eiusmod excepteur excepteur voluptate sint laborum anim ea laborum do. Eu deserunt et fugiat eu adipisicing nostrud nostrud nulla. Deserunt anim ex velit incididunt magna excepteur commodo cillum nisi sit culpa. Magna cillum consectetur Lorem pariatur amet. Minim aliquip ad ullamco dolor ad sint commodo adipisicing reprehenderit nulla tempor officia. Reprehenderit duis consequat id nulla do aute aute nulla aute culpa irure. Do quis reprehenderit consequat sit exercitation aliqua amet ut. Officia ut eu ea eiusmod cupidatat exercitation deserunt occaecat ea adipisicing adipisicing ullamco. Voluptate tempor aute cupidatat nisi voluptate tempor aute aliquip non non nisi ea. Voluptate qui dolor nostrud cillum veniam cillum dolore proident reprehenderit tempor qui eiusmod. Magna et tempor ipsum ex ullamco consectetur fugiat ipsum qui consectetur tempor cupidatat ex sint.'
            },
            {
                id: 4,
                rating: 4.8,
                description: 'Esse culpa sit ad exercitation sint deserunt minim eiusmod qui minim.'
            }
        ],
        position: 'Cillum minim anim nostrud cupidatat Lorem nulla pariatur elit dolor est.',
        code: 'Excepteur quis amet sit ut consequat irure ipsum aute non consequat.',
        titleData: 'Labore est sunt excepteur mollit.',
        propertiesSold: 277,
        medianSoldPrice: 440,
        medianDaysAdvertised: 11,
        allSuburbs: 288,
        properties: [
            {
                id: 1,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            },
            {
                id: 2,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 3,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 4,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 5,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 6,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
            ,
            {
                id: 7,
                name: '',
                status: 'sold',
                description: 'Tempor elit cillum duis pariatur sunt qui occaecat.',
                imagePath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
            }
        ]
    }

]

const DATA_AGENCIES = [
    {
        headerImage : '',
        nameAgency : '',
        descriptionAgency : '',
        propertiesSold : 500,
        medianDaysAdvertisedPropertiesSold: 30,
        propertiesLeased: 100,
        medianDaysAdvertisedPropertiesLeased: 10,
    },
    {
        headerImage : '',
        nameAgency : '',
        descriptionAgency : '',
        propertiesSold : 500,
        medianDaysAdvertisedPropertiesSold: 30,
        propertiesLeased: 100,
        medianDaysAdvertisedPropertiesLeased: 10,
    },
    {
        headerImage : '',
        nameAgency : '',
        descriptionAgency : '',
        propertiesSold : 500,
        medianDaysAdvertisedPropertiesSold: 30,
        propertiesLeased: 100,
        medianDaysAdvertisedPropertiesLeased: 10,
    },
    {
        headerImage : '',
        nameAgency : '',
        descriptionAgency : '',
        propertiesSold : 500,
        medianDaysAdvertisedPropertiesSold: 30,
        propertiesLeased: 100,
        medianDaysAdvertisedPropertiesLeased: 10,
    },
    {
        headerImage : '',
        nameAgency : '',
        descriptionAgency : '',
        propertiesSold : 500,
        medianDaysAdvertisedPropertiesSold: 30,
        propertiesLeased: 100,
        medianDaysAdvertisedPropertiesLeased: 10,
    },
    {
        headerImage : '',
        nameAgency : '',
        descriptionAgency : '',
        propertiesSold : 500,
        medianDaysAdvertisedPropertiesSold: 30,
        propertiesLeased: 100,
        medianDaysAdvertisedPropertiesLeased: 10,
    },
    {
        headerImage : '',
        nameAgency : '',
        descriptionAgency : '',
        propertiesSold : 500,
        medianDaysAdvertisedPropertiesSold: 30,
        propertiesLeased: 100,
        medianDaysAdvertisedPropertiesLeased: 10,
    },
    {
        headerImage : '',
        nameAgency : '',
        descriptionAgency : '',
        propertiesSold : 500,
        medianDaysAdvertisedPropertiesSold: 30,
        propertiesLeased: 100,
        medianDaysAdvertisedPropertiesLeased: 10,
    }
]
export {
    PROPERTY_SALES_TYPE,
    DATA_AGENTS,
    DATA_AGENCIES
}