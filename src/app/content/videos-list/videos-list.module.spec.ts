import { VideosListModule } from './videos-list.module';

describe('VideosListModule', () => {
  let videosListModule: VideosListModule;

  beforeEach(() => {
    videosListModule = new VideosListModule();
  });

  it('should create an instance', () => {
    expect(videosListModule).toBeTruthy();
  });
});
