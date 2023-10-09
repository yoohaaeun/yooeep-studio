import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { getDatabase, ref, set, get, remove } from 'firebase/database';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export interface IUser extends User {
  displayName: string;
  isAdmin: boolean;
}

export async function onUserStateChange(
  callback: (user: IUser | null) => void
) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user: User | null): Promise<IUser | null> {
  if (!user) {
    return null;
  }

  const adminsSnapshot = await get(ref(database, `admins`));

  if (adminsSnapshot.exists()) {
    const admin = adminsSnapshot.val();
    const isAdmin = admin.includes(user.uid);
    return { ...(user as IUser), isAdmin };
  } else {
    return user as IUser;
  }
}

export interface ProductFormData {
  image: FileList;
  title: string;
  price: string;
  category: string;
  description: string;
  options: string;
}

export async function addNewProduct(
  product: ProductFormData,
  image: string | null
) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(','),
  });
}

export interface IProduct {
  id: string;
  category?: string;
  description?: string;
  image: string;
  options: string[];
  price: number;
  title: string;
  option: string | number;
  quantity: number;
}

export async function getProducts(): Promise<IProduct[]> {
  return get(ref(database, 'products')) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
      return [];
    });
}

export async function getCart(userId: string) {
  return get(ref(database, `carts/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}

export async function addOrUpdateToCart(userId: string, product: IProduct) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId: string, productId: string) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}

export async function getWishList(userId: string) {
  return get(ref(database, `wish-list/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}

export async function addToWishList(userId: string, product: IProduct) {
  return set(ref(database, `wish-list/${userId}/${product.id}`), product);
}

export async function removeFromWishList(userId: string, productId: string) {
  return remove(ref(database, `wish-list/${userId}/${productId}`));
}
