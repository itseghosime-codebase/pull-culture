import { create } from "zustand";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  password: string; // only for dummy use — don’t include in real code
  image?: string;
}

interface SessionState {
  user: Omit<User, "password"> | null;
  loading: boolean;
  error: string | null;
  checkSession: () => Promise<void>;
  login: (emailOrUsername: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  user: null,
  loading: false,
  error: null,

  // Simulate checking if session exists
  checkSession: async () => {
    set({ loading: true });
    await new Promise((r) => setTimeout(r, 1200)); // simulate delay

    const savedUser =
      typeof window !== "undefined"
        ? localStorage.getItem("demoUserSession")
        : null;

    if (savedUser) {
      set({ user: JSON.parse(savedUser), loading: false });
    } else {
      set({ user: null, loading: false });
    }
  },

  // Simulate login
  login: async (emailOrUsername, password) => {
    set({ loading: true, error: null });
    await new Promise((r) => setTimeout(r, 1000));

    const demoUsers: User[] = [
      {
        id: "1",
        firstName: "Abdulrahman",
        lastName: "Bello",
        username: "abdulbello",
        email: "abdul@example.com",
        phone: "+2348012345678",
        password: "password123",
        image: "/assets/users/user-01.png",
      },
      {
        id: "2",
        firstName: "Naomi",
        lastName: "Adams",
        username: "naomiadams",
        email: "naomi@example.com",
        phone: "+2348023456789",
        password: "naomi321",
        image: "/assets/users/user-01.png",
      },
    ];

    const matchedUser = demoUsers.find(
      (u) =>
        (u.email === emailOrUsername || u.username === emailOrUsername) &&
        u.password === password
    );

    if (matchedUser) {
      const { password, ...userWithoutPassword } = matchedUser;
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "demoUserSession",
          JSON.stringify(userWithoutPassword)
        );
      }
      set({ user: userWithoutPassword, loading: false });
    } else {
      set({ user: null, error: "Invalid credentials", loading: false });
    }
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("demoUserSession");
    }
    set({ user: null, error: null });
  },
}));
