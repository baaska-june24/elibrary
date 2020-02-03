import ReactGA from "react-ga";
import axios from "axios";
import Auth from "@aws-amplify/auth";
import * as Sentry from '@sentry/browser';

export const initGA = () => {
  ReactGA.initialize("UA-112158799-1");
};

export const initSentry = () => {
  if (process.env.NODE_ENV !== "production") {
      return;
  }
  
  Sentry.init({dsn: "https://364cbdd50e2b4f44b83e893cbdb28d86@sentry.io/1862789"});
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

export class EsanMetrics {
  private static url = "/api/metrics";
  private static timeout: NodeJS.Timeout = null;

  public static collect() {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(async () => {
      let idToken;
      const { href, pathname, search } = window.location;

      // track only allowed pages
      if (!/(\/contents|\/authors|\/organizations|\/read)/g.test(pathname)) {
        return;
      }

      const userInfo = await Auth.currentUserInfo();

      await Auth.currentSession()
        .then(auth => {
          idToken = auth.getIdToken();
        })
        .catch(() => {});
      const headers: any = {};
      const data: any = {
        dp: window.screen.colorDepth, // colorDepth, 24bit, 32bit...
        sr: `${window.screen.width}x${window.screen.height}`, // screen resolution
        css: `${this.getWidth()}x${this.getHeight()}`, // current screen size
        u: href,
        pn: pathname,
        sp: search,
        dt: document.title,
        ua: navigator.userAgent
      };

      if (userInfo) {
        data.un = userInfo.username;
      }

      if (idToken) {
        headers["authorization"] = `Bearer ${idToken}`;
      }

      await axios.get(
        `${this.url}?${Object.keys(data)
          .map(key => `${key}=${encodeURIComponent((data as any)[key])}`)
          .join("&")}`,
        {
          headers
        }
      );
    }, 100);
  }

  public static collectEvent(eventData: any) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(async () => {
      let idToken;
      const { href, pathname, search } = window.location;

      const userInfo = await Auth.currentUserInfo();

      await Auth.currentSession()
        .then(auth => {
          idToken = auth.getIdToken().getJwtToken();
        })
        .catch(() => {});
      const headers: any = {};
      const data: any = {
        dp: window.screen.colorDepth, // colorDepth, 24bit, 32bit...
        sr: `${window.screen.width}x${window.screen.height}`, // screen resolution
        css: `${this.getWidth()}x${this.getHeight()}`, // current screen size
        u: href,
        pn: pathname,
        sp: search,
        dt: document.title,
        ua: navigator.userAgent,
        ...eventData
      };

      if (userInfo) {
        data.un = userInfo.username;
      }

      if (idToken) {
        headers["authorization"] = `Bearer ${idToken}`;
      }

      await axios.get(
        `${this.url}?${Object.keys(data)
          .map(key => `${key}=${encodeURIComponent((data as any)[key])}`)
          .join("&")}`,
        {
          headers
        }
      );
    }, 100);
  }

  private static getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  private static getHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }
}
