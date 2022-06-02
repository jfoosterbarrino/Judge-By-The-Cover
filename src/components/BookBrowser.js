import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BookCard from './BookCard';
import { Typography } from '@mui/material';
import EditButton from './Button';
import SubjectBar from './SubjectBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (<>
    <Typography variant ="h3" component="div" color ="secondary" sx={{display: 'flex', justifyContent: 'center'}}>Explore Book Collection</Typography>
    <hr/>
    <br/>
    <SubjectBar/>
    <br/>
    <Box sx={{ flexGrow: 1, mb:10 }}>
      <Grid container spacing={10}>
        {myBooks.map((book)=>(
        <Grid item lg={3} md={4} sm={6} xs={12} key={book.id} sx={{display:"flex", justifyContent:"center"}}>
          <Item>
            <BookCard book={book}/>
                {/* <Typography variant="h4" color="#ba8f95">
                {book.title}
                </Typography>
                <Typography variant="body1" color="#ba8f95">
                By: {book.author}
                </Typography>
                <br/>
                <img height="150" src={book.img}></img>
                <Typography variant="body1" color="#ba8f95">
                    <br/>
                    <EditButton>Add to My List</EditButton>
                    <br/>
                    <br/>
                    <strong>Summary</strong>
                <br/>
                {book.summary}
                <br/>
                <br/>
                <strong>Pages: </strong>{book.pages}
                <br/>
                <strong>Subject: </strong>{book.subject}
                <br/>
                <strong>ID: </strong>{book.id}
                </Typography> */}

          </Item>
        </Grid>
        ))}
        

      </Grid>
    </Box>
  </>);
}

const myBooks = [
    {
      img: 'https://res.cloudinary.com/dccf9vnoo/image/upload/v1653538799/170445333_wide-db3b2247d873b121255b9057267b654896df3aee_pcivwa.jpg',
      title: 'The Great Gatsby',
      author: 'F. Scott-Fitzgerald',
      pages: 208,
      summary: "The Great Gatsby, third novel by F. Scott Fitzgerald, published in 1925 by Charles Scribner's Sons. Set in Jazz Age New York, the novel tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
      id: 1,
      subject: "Non-Fiction"
    },
    {
      img: 'https://res.cloudinary.com/dccf9vnoo/image/upload/v1653580372/_106256569_hpotterbookgetty_cikurf.jpg',
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      pages: 607,
      summary: "The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort. Deathly Hallows shattered sales records upon release, surpassing marks set by previous titles of the Harry Potter series.",
      id: 2,
      subject: "Fiction"
    },
    {
      img: 'https://res.cloudinary.com/dccf9vnoo/image/upload/v1654142377/moby_dick_random_house_1930_smithsonian_oyxctw.jpg',
      title: 'Moby Dick',
      author: 'Herman Melville',
      pages: 378,
      summary: "Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge against Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee.",
      id: 3,
      subject: "Non-Fiction"
    },
    {
      img: 'https://res.cloudinary.com/dccf9vnoo/image/upload/v1654142466/rb1790_adventures_of_huckleberry_finn_book_csw_1_hmktdn.jpg',
      title: 'The Adventures of Huckleberry Finn',
      author: 'Mark Twain',
      pages: 366,
      summary: "Mark Twain's classic The Adventures of Huckleberry Finn (1884) is told from the point of view of Huck Finn, a barely literate teen who fakes his own death to escape his abusive, drunken father. He encounters a runaway slave named Jim, and the two embark on a raft journey down the Mississippi River.",
      id: 4,
      subject: "Non-Fiction"
    },
    {
      img: 'https://res.cloudinary.com/dccf9vnoo/image/upload/v1654142546/lord-of-the-flies_zw2rx8.jpg',
      title: 'Lord of the Flies',
      author: 'William Golding',
      pages: 224,
      summary: "William Golding's 1954 novel 'Lord of the Flies' tells the story of a group of young boys who find themselves alone on a deserted island. They develop rules and a system of organization, but without any adults to serve as a civilizing impulse, the children eventually become violent and brutal.",    
      id: 5,
      subject: "Fiction"
    },
    {
      img: 'https://res.cloudinary.com/dccf9vnoo/image/upload/v1654142580/the-catcher-in-the-rye-jd-salinger-first-edition-1951-rare_knwsn1.jpg',
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      pages: 234,
      summary: "The Catcher in the Rye, novel by J.D. Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world.",
      id: 6,
      subject: "Non-Fiction"
    },
    {
      img: 'https://res.cloudinary.com/dccf9vnoo/image/upload/v1654142634/08156d58-6138-42e2-89a6-56c63651666f_gawmtz.jpg',
      title: 'Animal Farm',
      author: 'George Orwell',
      pages: 112,
      summary: "Animal Farm is a satirical allegorical novella by George Orwell, first published in England on 17 August 1945. The book tells the story of a group of farm animals who rebel against their human farmer, hoping to create a society where the animals can be equal, free, and happy.",
      id: 7,
      subject: "Non-Fiction"
    },
    {
      img: 'https://res.cloudinary.com/dccf9vnoo/image/upload/v1654142676/charlottes-web-eb-white-first-edition-signed_ltozjh.jpg',
      title: "Charlotte's Web",
      author: 'E.B. White',
      pages: 192,
      summary: "Charlotte's Web, classic children's novel by E.B. White, published in 1952, with illustrations by Garth Williams. The widely read tale takes place on a farm and concerns a pig named Wilbur and his devoted friend Charlotte, the spider who manages to save his life by writing about him in her web.",
      id: 8,
      subject: "Fiction"
    },
    {
      img: 'https://res.cloudinary.com/dccf9vnoo/image/upload/v1654142704/Mockingbird_HERO_0_tsgz5t.jpg',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      pages: 281,
      summary: "To Kill a Mockingbird is a 1961 novel by Harper Lee. Set in small-town Alabama, the novel is a bildungsroman, or coming-of-age story, and chronicles the childhood of Scout and Jem Finch as their father Atticus defends a Black man falsely accused of rape. Scout and Jem are mocked by classmates for this.",
      id: 9,
      subject: "Non-Fiction"
    },
    {
      img: 'https://res.cloudinary.com/dccf9vnoo/image/upload/v1654142932/2101022_b7ugv5.jpg',
      title: 'Green Eggs and Ham',
      author: 'Dr.Seuss',
      pages: 62,
      summary: "Green Eggs and Ham is a classic story about a picky eater. The nameless main character refuses to try green eggs and ham. Throughout the book, his friend Sam-I-am keeps insisting that he'd like them. Sam suggests all different places to try this dish, but his friend keeps refusing.",
      id: 10,
      subject: "Fiction"
    },
    {
      img: 'https://res.cloudinary.com/dccf9vnoo/image/upload/v1654144051/c011d20f-dfa5-48d8-baa3-ecc93a57023f_mzdu0e.jpg',
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      pages: 1178,
      summary: "The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.",
      id: 11,
      subject: "Fiction"
    },
    {
      img: 'https://res.cloudinary.com/dccf9vnoo/image/upload/v1654144227/dsc_8667_m3pnkf.jpg',
      title: "War and Peace",
      author: 'Leo Tolstoy',
      pages: 1225,
      summary: "War and Peace broadly focuses on Napoleons invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.",
      id: 12,
      subject: "Non-Fiction"
    }
  ];