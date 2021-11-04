import Title from '../components/projects/Title';
import TitleSecondary from '../components/projects/TitleSecondary';
import Image from '../components/projects/Image';
import List from '../components/projects/List';

export default function ebooks() {
  return (
    <div className='max-w-2xl px-2 py-8 mx-auto text-black dark:text-gray-300'>
      <Title>eBooks Projekt Status</Title>
      <br />
      <List>
        <li>
          "Testna knjiga" je primjer korišten tokom razvoja aplikacije, radi
          populacije rezultata.
        </li>
        <br />
        <li>
          Klikom na "Otvori sliku u novoj kartici" možete pregledati sliku u
          punoj veličini.
        </li>
      </List>
      <br />
      <TitleSecondary>Početna</TitleSecondary>
      <Image src='/images/projects/ebooks/home.png' />
      <br />
      <TitleSecondary>Kontakt</TitleSecondary>
      <Image src='/images/projects/ebooks/contact.png' />
      <br />
      <TitleSecondary>Pretraga</TitleSecondary>
      <Image src='/images/projects/ebooks/search.png' />
      <br />
      <TitleSecondary>Shop</TitleSecondary>
      <Image src='/images/projects/ebooks/shop.png' />
      <br />
      <TitleSecondary>Pregled knjige</TitleSecondary>
      <Image src='/images/projects/ebooks/book.png' />
      <br />
      <TitleSecondary>Shopping cart</TitleSecondary>
      <p>
        „Izračunaj dostavu" - ovu opciju moramo konfigurisati, s obzirom da ne
        znam kakav je vaš model isporuke itd kao primjer sam stavio da je to
        total + 5€.
      </p>
      <Image src='/images/projects/ebooks/cart.png' />
      <br />
      <TitleSecondary>Pretplati se</TitleSecondary>
      <Image src='/images/projects/ebooks/pretplati_se.png' />
      <br />
      <TitleSecondary>Profil</TitleSecondary>
      <Image src='/images/projects/ebooks/profile.png' />
      <br />
      <TitleSecondary>Biblioteka</TitleSecondary>
      <Image src='/images/projects/ebooks/library.png' />
      <br />
      <br />
      <List>
        <li>
          Autorski panel i Čitač knjiga su preostale komponente, u finalnom
          stadiju razvoja. Nisam napravio te skrinove oba dijele jedan dio
          PayPal implementacije, povezane su, a to testiram rigorozno, tako da
          je to preostalo.
        </li>
      </List>
      <br />
      <br />
      <TitleSecondary>Kontrolni panel</TitleSecondary>
      <List>
        <li>
          Kontrolni panel je samo za administratore stranice. Omogućava pregled
          podataka na stranici, upload PDF fajlova, dodavanje knjiga i kontrolu
          nad korisnicima i narudžbama.
        </li>
      </List>
      <Image src='/images/projects/ebooks/strapi-home.png' />
      <br />
      <TitleSecondary>Kontrolni panel - Knjige</TitleSecondary>
      <Image src='/images/projects/ebooks/strapi-books.png' />
      <br />
      <TitleSecondary>Kontrolni panel - Pregled knjige</TitleSecondary>
      <Image src='/images/projects/ebooks/strapi-book_view.png' />
      <br />
      <TitleSecondary>Kontrolni panel - Kategorije</TitleSecondary>
      <Image src='/images/projects/ebooks/strapi-categories.png' />
      <br />
      <TitleSecondary>Kontrolni panel - Narudžbe</TitleSecondary>
      <Image src='/images/projects/ebooks/strapi-orders.png' />
      <br />
      <TitleSecondary>Kontrolni panel - Pregled narudžbe</TitleSecondary>
      <Image src='/images/projects/ebooks/strapi-order_view.png' />
      <br />
      <TitleSecondary>Kontrolni panel - Korisnici</TitleSecondary>
      <Image src='/images/projects/ebooks/strapi-users.png' />
      <br />
      <TitleSecondary>Kontrolni panel - Pregled korisnika</TitleSecondary>
      <Image src='/images/projects/ebooks/strapi-user_view.png' />
    </div>
  );
}
