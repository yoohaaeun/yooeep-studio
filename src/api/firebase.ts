import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';

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
