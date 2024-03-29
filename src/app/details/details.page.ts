import {
  Component,
  Input,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonLabel,
  IonButtons,
  IonBackButton,
  IonItem,
} from '@ionic/angular/standalone';
import { DatePipe, DecimalPipe } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { MovieResult } from '../services/interfaces';
import { heartOutline, calendarOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonLabel,
    IonButtons,
    IonBackButton,
    IonItem,
    DatePipe,
    DecimalPipe,
  ],
})
export class DetailsPage {
  private movieService = inject(MovieService);
  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public movie: WritableSignal<MovieResult | null> = signal(null);

  @Input()
  set id(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe((movie) => {
      this.movie.set(movie);
    });
  }

  constructor() {
    addIcons({ heartOutline, calendarOutline });
  }
}
