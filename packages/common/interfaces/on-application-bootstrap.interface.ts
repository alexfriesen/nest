/**
 * @publicApi
 *
 * @description
 * Interface defining method called once the application has fully started and
 * is bootstrapped.
 *
 * @see [Lifecycle Events](https://docs.nestjs.com/fundamentals/lifecycle-events)
 */
export interface OnApplicationBootstrap {
  onApplicationBootstrap(): any;
}
