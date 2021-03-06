import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { anything, instance, mock, when } from 'ts-mockito';
import { HomePageComponent } from './home-page.component';
import { ApiService } from '../../shared/services/api/api.service';

describe('HomePageComponent', () => {
	let component: HomePageComponent;
	let fixture: ComponentFixture<HomePageComponent>;
	const mockApiService = mock(ApiService);

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [HomePageComponent],
			providers: [
				{
					provide: ApiService,
					useValue: instance(mockApiService),
				},
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();

		when(mockApiService.getDailyChallenge()).thenResolve({
			id: 1,
			category: null,
			description: '',
			durationSeconds: 0,
			title: '',
			createdByPublicUserId: null,
			createdByUserName: '',
			pointsWin: 0,
			pointsLoose: 0,
			ongoing: false,
			marked: false,
		});

		when(mockApiService.getChallenges(anything(), 0, 10)).thenResolve([]);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
