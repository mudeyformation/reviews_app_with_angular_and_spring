import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatListModule } from "@angular/material/list"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { HttpClientModule } from "@angular/common/http"
import { HomeComponent } from "components/home/home.component"
import { NavbarComponent } from "components/navbar/navbar.component"
import { SigninComponent } from "components/signin/signin.component"
import { SignupComponent } from "components/signup/signup.component"
import { FooterComponent } from "components/footer/footer.component"
import { AdminComponent } from "pages/admin/admin.component"
import { PaginationComponent } from "components/pagination/pagination.component"
import { ColumnPipe } from "pipes/column.pipe"
import { AddEditFormComponent } from "components/add-edit-form/add-edit-form.component"
import { DisplayValuePipe } from "pipes/display-value.pipe"
import { ConfirmModalComponent } from "components/confirm-modal/confirm-modal.component"
import { GetLinkPipe } from "pipes/get-link.pipe"
import { FilmListComponent } from "components/film-list/film-list.component"
import { PlaceListComponent } from "components/place-list/place-list.component"
import { AddEditReviewComponent } from "components/add-edit-review/add-edit-review.component"
import { FilmItemComponent } from "components/film-item/film-item.component"
import { ReviewBoxComponent } from "components/review-box/review-box.component"


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    AdminComponent,
    PaginationComponent,
    AddEditFormComponent,
    ConfirmModalComponent,
    FilmListComponent,
    PlaceListComponent,
    AddEditReviewComponent,
    FilmItemComponent,
    ReviewBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ColumnPipe,
    DisplayValuePipe,
    GetLinkPipe
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
