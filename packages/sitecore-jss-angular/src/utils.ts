import { ExperienceEditor } from '@sitecore-jss/sitecore-jss/utils';
import { ɵisObservable as isObservable, ɵisPromise as isPromise } from '@angular/core';
import { from, Observable, of } from 'rxjs';

/**
 * @description in Experience Editor with an Angular sample app, anchor tags
 * with both onclick and href attributes will use the href, blocking the onclick from firing.
 * This function makes it so the anchor tags function as intended in an Angular sample when using Experience Editor
 *
 * The Mutation Observer API is used to observe changes to the body, then select all elements with href="#" and an onclick,
 * and replaces the # value with javascript:void(0); which prevents the anchor tag from blocking the onclick event handler.
 * @see Mutation Observer API: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver
 */
export const handleEditorAnchors = () => {
  // Angular gives the href attribute priority over the onclick attribute if both are present, so we must replace
  // the href attribute to avoid overriding the onclick in Experience Editor
  if (!window || !ExperienceEditor.isActive()) {
    return;
  }
  const targetNode = document.querySelector('body');
  const callback = (mutationList: MutationRecord[]) => {
    mutationList.forEach((mutation: MutationRecord) => {
      const btns: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
        '.scChromeDropDown > a[href="#"], a[onclick]'
      );
      if (mutation.type === 'childList') {
        btns.forEach((link: HTMLAnchorElement) => {
          link.href = 'javascript:void(0);';
        });
      }
      return;
    });
  };
  const observer: MutationObserver = new MutationObserver(callback);
  const observerOptions = {
    childList: true,
    subtree: true,
  };
  if (targetNode) {
    observer.observe(targetNode, observerOptions);
  }
};


export type InnerType<T> = T extends Promise<infer P> ? P : T extends Observable<infer O> ? O : T;

export function wrapIntoObservable<T>(value: T): Observable<InnerType<T>> {
  if (isObservable(value)) {
    return value as any;
  }

  if (isPromise(value)) {
    return from(Promise.resolve(value)) as any;
  }

  return of(value) as any;
}