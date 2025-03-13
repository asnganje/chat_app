import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="button"
export default class extends Controller {
  static targets = ["output"]

  signer() {
    alert("Button clicked using stimulus")
  }
}
