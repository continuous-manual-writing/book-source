 function validateSection(section) {
    if (section.getLevel() > 6) {
      addError("節のレベルが深すぎです", section.getHeaderContent(0));
    }
}
