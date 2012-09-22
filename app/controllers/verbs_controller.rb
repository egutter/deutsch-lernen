class VerbsController < ApplicationController

  PERSON = %w(erste-person zweite-person dritte-person)
  NUMBER = %w(singular plural)
  WHO = {
    'singular' => {'erste-person' => 'Ich',
                  'zweite-person' => 'Du',
                  'dritte-person' => 'Er/sie/es'},
    'plural' =>  {'erste-person' => 'Wir',
                  'zweite-person' => 'Ihr',
                  'dritte-person' => 'sie/Sie'}
  }
  def conjugation
    @verb = VERBS.keys[rand(VERBS.size)]
    @person = PERSON[rand(PERSON.size)]
    @number = NUMBER[rand(NUMBER.size)]
    @who = WHO[@number][@person]
  end

  def validate
    @verb = params[:verb]
    @solution = VERBS[@verb]
    @person = params[:person]
    @number = params[:number]
    @who = WHO[@number][@person]
    @conjugation = params[:conjugation]

    if @solution[@number][@person] == @conjugation.downcase
      @conjugation_success = true
    else
      @conjugation_failed = true
      @show_solution = params[:show_solution]
    end

    render :conjugation
  end
end
